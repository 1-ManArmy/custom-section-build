import { useState } from 'react';
import { ChevronDown, ChevronUp } from '@phosphor-icons/react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "What is Phoenix AI Digital Friend?",
        answer: "Phoenix AI is an advanced AI companion designed to assist you with various tasks, provide intelligent conversations, and help boost your productivity through natural language interactions."
    },
    {
        question: "How does the AI chat feature work?",
        answer: "Our AI chat uses state-of-the-art language models to understand your queries and provide helpful, contextual responses. You can ask questions, get coding help, or have casual conversations."
    },
    {
        question: "Can I upload files and documents?",
        answer: "Yes! Phoenix AI supports file uploads including documents, images, and code files. The AI can analyze, summarize, and help you work with your uploaded content."
    },
    {
        question: "What programming languages are supported?",
        answer: "Phoenix AI supports all major programming languages including Python, JavaScript, TypeScript, Go, Java, C++, and many more. It can help with code review, debugging, and optimization."
    },
    {
        question: "Is my data secure and private?",
        answer: "Absolutely. We take privacy seriously. Your conversations and uploaded files are encrypted and never shared with third parties. You have full control over your data."
    },
    {
        question: "Can I use Phoenix AI for commercial projects?",
        answer: "Yes, our paid plans include commercial usage rights. The AI can assist with business development, code generation, and professional projects within the terms of service."
    },
    {
        question: "What's included in the different subscription plans?",
        answer: "Plans vary by usage limits, priority support, and advanced features. Lifetime plans include unlimited usage, priority processing, and access to all future updates."
    },
    {
        question: "How do I get started?",
        answer: "Simply sign up for an account, choose your plan, and start chatting with Phoenix AI. No setup required - you can begin using the AI immediately after registration."
    }
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Animated Background with Purple/Pink Theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-pink-950/30 to-purple-900/40" />
            
            {/* Animated Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 25% 25%, rgba(219, 39, 119, 0.3) 0%, transparent 70%),
                        radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.3) 0%, transparent 70%),
                        linear-gradient(rgba(219, 39, 119, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '400px 400px, 300px 300px, 30px 30px, 30px 30px',
                    animation: 'grid-move 25s linear infinite'
                }}
            />

            {/* Floating Gradient Orbs */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 via-purple-500/20 to-pink-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Animated Border Elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/30 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Everything you need to know about Phoenix AI Digital Friend and how it can help you.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div 
                            key={index}
                            className="group relative"
                        >
                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[1px] opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-full bg-black/60 rounded-xl" />
                            </div>
                            
                            {/* Content */}
                            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-200"
                                >
                                    <h3 className="text-lg font-semibold text-white pr-4">
                                        {item.question}
                                    </h3>
                                    <div className="flex-shrink-0 w-6 h-6 text-purple-400">
                                        {openItems.includes(index) ? (
                                            <ChevronUp size={24} />
                                        ) : (
                                            <ChevronDown size={24} />
                                        )}
                                    </div>
                                </button>
                                
                                {/* Answer */}
                                <div className={`transition-all duration-300 ease-in-out ${
                                    openItems.includes(index) 
                                        ? 'max-h-96 opacity-100' 
                                        : 'max-h-0 opacity-0'
                                } overflow-hidden`}>
                                    <div className="px-6 pb-5 pt-0">
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-400 mb-4">
                        Still have questions? We're here to help!
                    </p>
                    <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                        <span className="relative z-10">Contact Support</span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
}