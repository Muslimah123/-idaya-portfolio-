import React from 'react';
import Card from '../ui/Card';
import { publicationsData } from '../../data/publications';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Publications
          </h2>
          
          <div className="space-y-6">
            {publicationsData.map((publication, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {publication.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Authors:</span> {publication.authors}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Published in:</span> {publication.venue}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      <span className="font-medium">Year:</span> {publication.year}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {publication.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {publication.keywords.map((keyword, keywordIndex) => (
                        <span
                          key={keywordIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:min-w-fit">
                    {publication.pdfLink && (
                      <a
                        href={publication.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        📄 PDF
                      </a>
                    )}
                    {publication.doiLink && (
                      <a
                        href={publication.doiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        🔗 DOI
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
