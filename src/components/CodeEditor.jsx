import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';

const SyntaxHighlighter = ({ code, language }) => {
  const highlightWords = (text) => {
    return text.split(/([a-zA-Z0-9_$]+|"[^"]*"|'[^']*'|`[^`]*`|[(){}[\]\.,.;:])/g).map((part, i) => {
      if (!part) return null;

      if (part.startsWith('"') || part.startsWith("'") || part.startsWith('`')) {
        return <span key={i} className="text-accent-secondary">{part}</span>;
      }
      if (['import', 'from', 'const', 'let', 'var', 'return', 'if', 'else', 'async', 'await', 'try', 'catch', 'function', 'class', 'export', 'default', 'package', 'type', 'func', 'struct'].includes(part)) {
        return <span key={i} className="text-accent-primary font-medium">{part}</span>;
      }
      if (!isNaN(parseFloat(part)) && isFinite(part)) {
        return <span key={i} className="text-accent-primary">{part}</span>;
      }
      return <span key={i} className="text-text-primary">{part}</span>;
    });
  };

  const renderHighlighted = () => {
    const lines = code.split('\n');
    return lines.map((line, lineIndex) => {
      const commentIndex = line.indexOf('//');
      if (commentIndex !== -1) {
        const codePart = line.substring(0, commentIndex);
        const commentPart = line.substring(commentIndex);
        return (
          <div key={lineIndex} className="table-row">
            <span className="table-cell text-right pr-4 text-text-secondary select-none w-8 text-xs opacity-30">{lineIndex + 1}</span>
            <span className="table-cell whitespace-pre">
              {highlightWords(codePart)}
              <span className="text-text-secondary italic opacity-50">{commentPart}</span>
            </span>
          </div>
        );
      }
      return (
        <div key={lineIndex} className="table-row">
          <span className="table-cell text-right pr-4 text-text-secondary select-none w-8 text-xs opacity-30">{lineIndex + 1}</span>
          <span className="table-cell whitespace-pre">{highlightWords(line)}</span>
        </div>
      );
    });
  };

  return (
    <div className="font-mono text-[13px] leading-relaxed w-full">
      <div className="table w-full">
        {renderHighlighted()}
      </div>
    </div>
  );
};

const CodeEditor = () => {
  const [activeTab, setActiveTab] = useState(0);
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
    message: 'Survey submitted.' 
  });
});`
    }
  ];

  const { displayText } = useTypewriter(
    codeSnippets[activeTab].content,
    1,
    100
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % codeSnippets.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [codeSnippets.length]);

  return (
    <div className="bg-[#0d1117] border border-border-subtle rounded-md overflow-hidden shadow-2xl">
      {/* Editor Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-border-subtle">
        <div className="flex space-x-1.5 leading-none">
          <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
          <div className="w-2.5 h-2.5 rounded-full bg-border-subtle" />
        </div>
        <div className="text-[10px] text-text-secondary font-mono uppercase tracking-widest bg-background px-2 py-0.5 rounded border border-border-subtle">
          {codeSnippets[activeTab].name}
        </div>
        <div className="text-[10px] text-text-secondary font-mono">
          {activeTab + 1} / {codeSnippets.length}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-[#161b22]/50">
        {codeSnippets.map((tab, index) => (
          <button
            key={tab.name}
            className={`px-4 py-2.5 text-[11px] font-mono transition-colors border-r border-border-subtle ${activeTab === index ? 'text-text-primary bg-background border-b border-b-accent-primary' : 'text-text-secondary hover:text-text-primary'
              }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div
        ref={scrollRef}
        className="p-6 h-[400px] overflow-hidden"
      >
        <SyntaxHighlighter
          code={displayText}
          language={codeSnippets[activeTab].language}
        />
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] text-[10px] text-text-secondary font-mono border-t border-border-subtle">
        <div className="flex items-center gap-4">
          <span>LF</span>
          <span>UTF-8</span>
          <span>{codeSnippets[activeTab].language.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
          <span>LOCKED</span>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;