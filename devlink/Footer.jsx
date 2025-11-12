import React from 'react';
import { Block, Link, Paragraph } from './_Builtin/Basic';

/**
 * Example Footer component
 * This is a placeholder - it will be replaced when you sync with your Webflow site
 */

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Block 
      tag="footer" 
      className="footer"
      style={{
        backgroundColor: 'var(--background-color-dark, #111827)',
        color: 'var(--text-color-light, #f9fafb)',
        padding: '3rem 2rem',
        marginTop: 'auto'
      }}
    >
      <Block 
        className="footer-container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}
      >
        <Block className="footer-column">
          <h3 style={{ marginBottom: '1rem' }}>Product</h3>
          <Block style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link options={{ href: '#features' }}>Features</Link>
            <Link options={{ href: '#pricing' }}>Pricing</Link>
            <Link options={{ href: '#docs' }}>Documentation</Link>
          </Block>
        </Block>
        
        <Block className="footer-column">
          <h3 style={{ marginBottom: '1rem' }}>Company</h3>
          <Block style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link options={{ href: '#about' }}>About</Link>
            <Link options={{ href: '#blog' }}>Blog</Link>
            <Link options={{ href: '#careers' }}>Careers</Link>
          </Block>
        </Block>
        
        <Block className="footer-column">
          <h3 style={{ marginBottom: '1rem' }}>Support</h3>
          <Block style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <Link options={{ href: '#help' }}>Help Center</Link>
            <Link options={{ href: '#contact' }}>Contact</Link>
            <Link options={{ href: '#status' }}>Status</Link>
          </Block>
        </Block>
      </Block>
      
      <Block 
        className="footer-bottom"
        style={{
          maxWidth: '1200px',
          margin: '2rem auto 0',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}
      >
        <Paragraph>© {currentYear} Your Company. All rights reserved.</Paragraph>
      </Block>
    </Block>
  );
};

