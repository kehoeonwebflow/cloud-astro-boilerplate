import React from 'react';
import { Block, Link } from './_Builtin/Basic';

/**
 * Example Navbar component
 * This is a placeholder - it will be replaced when you sync with your Webflow site
 */

export const Navbar = ({ 
  navbarLinkFeatures = 'Features',
  navbarLinkProducts = 'Products', 
  navbarLinkResources = 'Resources',
  navbarLinkContact = 'Contact'
}) => {
  return (
    <Block 
      tag="nav" 
      className="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'var(--background-color, #ffffff)',
        borderBottom: '1px solid var(--border-color, #e5e7eb)'
      }}
    >
      <Block className="navbar-brand" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Link options={{ href: '/' }}>Your Brand</Link>
      </Block>
      <Block 
        className="navbar-menu" 
        style={{ 
          display: 'flex', 
          gap: '2rem',
          alignItems: 'center'
        }}
      >
        {navbarLinkFeatures && (
          <Link options={{ href: '#features' }}>{navbarLinkFeatures}</Link>
        )}
        {navbarLinkProducts && (
          <Link options={{ href: '#products' }}>{navbarLinkProducts}</Link>
        )}
        {navbarLinkResources && (
          <Link options={{ href: '#resources' }}>{navbarLinkResources}</Link>
        )}
        {navbarLinkContact && (
          <Link 
            button={true}
            className="button-primary" 
            options={{ href: '#contact' }}
          >
            {navbarLinkContact}
          </Link>
        )}
      </Block>
    </Block>
  );
};

