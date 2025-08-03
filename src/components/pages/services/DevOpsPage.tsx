import {useEffect} from "react";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";

const DevOpsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <SEO 
                title="DevOps Excellence | NexGen Technology Solutions"
                description="Our DevOps services streamline your development pipeline, improve collaboration, and accelerate delivery with CI/CD, infrastructure as code, and monitoring solutions."
                keywords="devops, CI/CD, infrastructure as code, monitoring, automation, deployment"
                ogTitle="DevOps Excellence | NexGen"
                ogDescription="Streamline your development pipeline and accelerate delivery with our DevOps solutions"
                ogImage="/images/og-devops.jpg"
                canonicalUrl="https://yourdomain.com/services/devops"
            />
            <JsonLd 
                type="Service"
                data={{
                    name: "DevOps Excellence",
                    provider: {
                        '@type': 'Organization',
                        name: 'NexGen'
                    },
                    description: "Our DevOps services streamline your development pipeline, improve collaboration, and accelerate delivery.",
                    areaServed: "Worldwide",
                    serviceType: "DevOps"
                }}
            />
            <Navigation />
            
            {/* Rest of your DevOps page content */}
            {/* ... */}
        </div>
    );
};

export default DevOpsPage;
