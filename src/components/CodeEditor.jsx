import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-900/50 rounded-lg border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-6">Interactive Counter</h3>
      <div className="text-6xl font-mono font-bold text-blue-400 mb-8">
        {count}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(c => c - 1)}
          className="px-6 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30 font-mono"
        >
          - Decrement
        </button>
        <button
          onClick={() => setCount(c => c + 1)}
          className="px-6 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors border border-green-500/30 font-mono"
        >
          + Increment
        </button>
      </div>
    </div>
  );
};

const SyntaxHighlighter = ({ code, language }) => {
  const highlightWords = (text) => {
    // Split by delimiters but keep them
    return text.split(/([a-zA-Z0-9_$]+|"[^"]*"|'[^']*'|`[^`]*`|[(){}[\],.;:])/g).map((part, i) => {
      if (!part) return null;

      // Strings
      if (part.startsWith('"') || part.startsWith("'") || part.startsWith('`')) {
        return <span key={i} className="text-green-400">{part}</span>;
      }
      // Keywords
      if (['import', 'from', 'const', 'let', 'var', 'return', 'if', 'else', 'async', 'await', 'try', 'catch', 'function', 'class', 'interface', 'export', 'default', 'type'].includes(part)) {
        return <span key={i} className="text-purple-400 font-bold">{part}</span>;
      }
      // Types/Classes
      if (['React', 'useState', 'useEffect', 'motion', 'AnimatePresence', 'express', 'jwt', 'mongoose', 'mysql', 'Request', 'Response', 'Promise', 'void', 'string', 'number'].includes(part)) {
        return <span key={i} className="text-yellow-400">{part}</span>;
      }
      // Booleans
      if (['true', 'false', 'null', 'undefined'].includes(part)) {
        return <span key={i} className="text-orange-400">{part}</span>;
      }
      // Numbers
      if (!isNaN(parseFloat(part)) && isFinite(part)) {
        return <span key={i} className="text-blue-400">{part}</span>;
      }
      // Functions (heuristic: followed by () in next token - hard to do in simple map, so just color common ones)
      if (['log', 'error', 'connect', 'json', 'status', 'send', 'post', 'get', 'use'].includes(part)) {
        return <span key={i} className="text-blue-300">{part}</span>;
      }

      return <span key={i} className="text-gray-200">{part}</span>;
    });
  };

  // Improved highlighting logic that handles full lines for comments
  const renderHighlighted = () => {
    const lines = code.split('\n');
    return lines.map((line, lineIndex) => {
      // Check for comment
      const commentIndex = line.indexOf('//');
      if (commentIndex !== -1) {
        const codePart = line.substring(0, commentIndex);
        const commentPart = line.substring(commentIndex);
        return (
          <div key={lineIndex} className="table-row">
            <span className="table-cell text-right pr-4 text-gray-600 select-none w-8 text-xs">{lineIndex + 1}</span>
            <span className="table-cell whitespace-pre">
              {highlightWords(codePart)}
              <span className="text-gray-500 italic">{commentPart}</span>
            </span>
          </div>
        );
      }
      return (
        <div key={lineIndex} className="table-row">
          <span className="table-cell text-right pr-4 text-gray-600 select-none w-8 text-xs">{lineIndex + 1}</span>
          <span className="table-cell whitespace-pre">{highlightWords(line)}</span>
        </div>
      );
    });
  };

  return (
    <div className="font-mono text-sm leading-relaxed w-full">
      <div className="table w-full">
        {renderHighlighted()}
      </div>
    </div>
  );
};

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const scrollRef = useRef(null);

  const codeSnippets = [
    {
      name: 'shortener.go',
      language: 'go',
      content: `package service

import (
	"context"
	"github.com/redis/go-redis/v9"
)

type URLShortener struct {
	repo  Repository
	cache *redis.Client
}

func (s *URLShortener) GetRedirect(ctx context.Context, code string) (string, error) {
	// Try cache first
	url, err := s.cache.Get(ctx, "url:"+code).Result()
	if err == nil {
		return url, nil
	}

	// Fallback to DB
	originalURL, err := s.repo.FindByCode(ctx, code)
	if err != nil {
		return "", err
	}

	// Set cache asynchronously
	go s.cache.Set(ctx, "url:"+code, originalURL, 0)
	
	return originalURL, nil}`
    },
    {
      name: 'maritime_api.ts',
      language: 'ts',
      content: `import { Router } from 'express';
import { SurveyController } from './controllers';
import { QueueManager } from './queue';

export const maritimeRouter = Router();

maritimeRouter.post('/vessels/:id/submit-survey', async (req, res) => {
  const { id } = req.params;
  const surveyData = req.body;

  // Process survey logic
  const survey = await SurveyController.process(id, surveyData);

  // Queue PDF generation background job
  await QueueManager.addJob('generate-certificate', {
    surveyId: survey.id,
    vesselId: id,
    timestamp: new Date().toISOString()
  });

  res.status(200).json({ 
    success: true, 
    message: 'Survey submitted. Certificate generating.' 
  });
});`
    },
    {
      name: 'postgres.ts',
      language: 'ts',
      content: `import { Pool } from 'pg';

const pool = new Pool();

export const query = async (text: string, params: any[]) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('executed query', { text, duration, rows: res.rowCount });
    return res;
  } catch (err) {
    console.error('query error', err);
    throw err;
  }
};

// composite index optimization helper
export const optimizeTable = async () => {
  await query(\`
    CREATE INDEX IF NOT EXISTS idx_tenant_created 
    ON clicks (tenant_id, created_at DESC)
  \`, []);
};`
    }
  ];

  // Nuclear fast speed: 1ms
  const { displayText, restart } = useTypewriter(
    codeSnippets[activeTab].content,
    1,
    100
  );

  useEffect(() => {
    // Only auto-switch tabs if not in preview mode
    if (showPreview) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const next = (prev + 1) % codeSnippets.length;
        return next;
      });
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [codeSnippets.length, showPreview]);

  useEffect(() => {
    // restart(); // Handled by hook now
    if (activeTab !== 0) setShowPreview(false); // Reset preview when switching away from Counter
  }, [activeTab]);

  // Auto-scroll to bottom when text changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayText]);

  const getLanguageColor = (language) => {
    switch (language) {
      case 'tsx': return 'text-blue-400';
      case 'ts': return 'text-blue-500';
      case 'js': return 'text-yellow-400';
      case 'json': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div
      className="code-window overflow-hidden shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        boxShadow: [
          '0 0 20px rgba(88, 166, 255, 0.1)',
          '0 0 30px rgba(88, 166, 255, 0.2)',
          '0 0 20px rgba(88, 166, 255, 0.1)'
        ]
      }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        boxShadow: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        transition: { duration: 0.3 }
      }}
      style={{
        background: 'linear-gradient(135deg, #0d1117 0%, #161b22 100%)',
        border: '1px solid #30363d',
        boxShadow: '0 0 20px rgba(88, 166, 255, 0.1)'
      }}
    >
      {/* Editor Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        {codeSnippets[activeTab].hasPreview && (
          <div className="flex bg-gray-800 rounded-lg p-1 border border-gray-700">
            <button
              onClick={() => setShowPreview(false)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${!showPreview ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-gray-300'
                }`}
            >
              Code
            </button>
            <button
              onClick={() => setShowPreview(true)}
              className={`px-3 py-1 text-xs rounded-md transition-colors ${showPreview ? 'bg-green-500/20 text-green-400' : 'text-gray-400 hover:text-gray-300'
                }`}
            >
              Preview
            </button>
          </div>
        )}

        <div className="text-sm text-gray-400 font-mono">
          {activeTab + 1} / {codeSnippets.length}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {codeSnippets.map((tab, index) => (
          <motion.button
            key={tab.name}
            className={`px-4 py-3 text-sm font-mono transition-all duration-300 whitespace-nowrap ${activeTab === index
                ? 'tab-active text-white bg-white/5'
                : 'tab-inactive text-gray-400 hover:text-gray-300'
              }`}
            onClick={() => setActiveTab(index)}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className={getLanguageColor(tab.language)}>
              {tab.name}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <motion.div
        ref={scrollRef}
        className="p-6 h-80 overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <AnimatePresence mode="wait">
          {showPreview && codeSnippets[activeTab].hasPreview ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full"
            >
              <Counter />
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SyntaxHighlighter
                code={displayText}
                language={codeSnippets[activeTab].language}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-xs text-gray-400 border-t border-gray-700">
        <span>{showPreview ? 'Interactive Mode' : 'Ready'}</span>
        <div className="flex items-center space-x-4">
          <span>{codeSnippets[activeTab].language.toUpperCase()}</span>
          <div className={`w-2 h-2 rounded-full animate-pulse ${showPreview ? 'bg-green-500' : 'bg-blue-500'}`}></div>
          <span>UTF-8</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeEditor;