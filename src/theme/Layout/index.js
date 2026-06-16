import React from 'react'; // Import React
import Head from '@docusaurus/Head'; // Import Head
import clsx from 'clsx'; // Import clsx
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import CustomHeader from '@site/src/components/CustomHeader'; // Import your CustomHeader
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import {useLocation} from '@docusaurus/router'; // Import useLocation
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

function LayoutWrapper(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    noIndex, // Ensure noIndex is destructured if passed as a prop
    title,
    description,
    // Add this here
    ...layoutProps
  } = props;
  const {pathname} = useLocation(); // Use useLocation to get pathname

  // Determine if it's the homepage based on the baseUrl from docusaurus.config.js
  const isHomepage = pathname === useBaseUrl('/');

  return (
    <LayoutProvider>
      <Head>
        {/* Your CustomHeader will handle the title display, so we don't strictly need Docusaurus's title here if it causes duplication */}
        {title && <title>{title}</title>}
        {noIndex && (
          <meta
            name="robots"
            content="noindex, nofollow, noarchive" />
        )}

        {description && <meta name="description" content={description} />}

        {description && (
          <meta property="og:description" content={description} />
        )}
        {title && <meta property="og:title" content={title} />}
        {title && <meta property="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Only render global banner and header if NOT the homepage */}
      {!isHomepage && (
        <>
          <img
            src={useBaseUrl("/img/un8.png")} // Use base URL helper to resolve path
            alt="UN Banner"
            style={{
              width: "100%", 
              height: "10px", 
              display: "block", 
              margin: "0 auto",
              position: "sticky", // Make the banner sticky
              top: "0",           // Stick to the very top
              zIndex: 1001        // Ensure it's above CustomHeader but below modals etc.
            }}
          />
          <CustomHeader />
        </>
      )}

      <SkipToContent />

      <AnnouncementBar />
      <Navbar {...layoutProps} />

      <div
        className={clsx(
          'main-wrapper',
          wrapperClassName,
          isHomepage ? styles.homePageWrapper : styles.docPageWrapper // Apply conditional class
        )}
        // Docusaurus's LayoutProvider or other mechanisms typically handle error boundaries.
        // Directly using errorBoundary.wrap is not standard unless errorBoundary is a passed prop or specific import.
        >
        {children}
      </div>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}

export default LayoutWrapper;
