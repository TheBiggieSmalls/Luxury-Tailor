import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const BASE = "https://bespoke-canvas-charm.lovable.app";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const url = `${BASE}${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Page not found (404) | Alex Nass</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Return to the Alex Nass homepage to explore bespoke tailoring in Leuven and Brussels."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Page not found (404) | Alex Nass" />
        <meta property="og:description" content="The page you are looking for does not exist. Return to the Alex Nass homepage." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
