/**
 * TypeScript declarations for Webflow DevLink components
 * This file will be replaced when you sync with your Webflow site
 */

import { ReactNode, CSSProperties } from 'react';

export interface BasicComponentProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  tag?: string;
}

export interface SectionProps extends BasicComponentProps {
  tag?: 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer' | 'main';
}

export interface ContainerProps extends BasicComponentProps {
  tag?: 'div' | 'section';
}

export interface BlockProps extends BasicComponentProps {
  tag?: string;
}

export interface LinkProps {
  children?: ReactNode;
  className?: string;
  button?: boolean;
  options?: {
    href?: string;
    target?: string;
    rel?: string;
  };
  style?: CSSProperties;
}

export interface HeadingProps extends BasicComponentProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface ParagraphProps extends BasicComponentProps {}

export interface NavbarProps {
  navbarLinkFeatures?: string;
  navbarLinkProducts?: string;
  navbarLinkResources?: string;
  navbarLinkContact?: string;
}

export interface FooterProps {}

export interface DevLinkProviderProps {
  children: ReactNode;
}

