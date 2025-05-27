// Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-2">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <div className="grid gap-6 sm:grid-cols-1">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow border dark:border-gray-700">
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            You can contact me
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:varisdeepsingh2@loyalistcollege.com"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                📧 varisdeepsingh2@loyalistcollege.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/varis-thind-527b94307/"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
