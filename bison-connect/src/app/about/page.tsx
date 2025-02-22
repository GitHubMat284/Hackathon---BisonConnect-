import Link from 'next/link';

export default function AboutPage() {
    return (
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
       
          
        <h1 className="text-3xl font-bold text-gray-800" style={{ marginTop: '-150px' }}>About Us</h1>
        <p className="text-gray-600 text-center mt-4 w-3/4">
          Welcome to BisonsConnect! This platform helps University of Manitoba students find events, connect with others, and explore campus life. We’re all about connecting you with the coolest events like epic dance parties, important networking sessions and even communal gatherings! Whether you’re into wild late-night parties or old fashioned dancing lessons, we’ve got the scoop on events that make college life unforgettable.
          Our number 1 policy is to leave your house, touch some grass and have a good time! So grab your friends and dive into a world of fun, learning, and community. From live music to art shows, there’s always something happening that’ll spark your interest and ignite your passions. Stay tuned and get ready to make some incredible memories—this is your hub for all things awesome at our university!
        </p>
          {/* Back to Home Button */}
        <Link href="/">
          <button style={{position: 'absolute',
              top: '20px', // Adjust this value as needed
              left: '20px', // Adjust this value as needed
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer', }} className=" mt-6 px-6 py-3 font-bold bg-blue-500 text-white rounded hover:bg-blue-600">
            
            Back to Home
          </button>
        </Link>
      
      </main>
    );
  }
  