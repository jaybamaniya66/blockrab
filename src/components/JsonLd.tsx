
import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  type: 'Organization' | 'Service' | 'WebSite' | 'BreadcrumbList';
  data: any;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const getSchemaMarkup = () => {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    };
    
    return JSON.stringify(schemaData);
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {getSchemaMarkup()}
      </script>
    </Helmet>
  );
};

export default JsonLd;
