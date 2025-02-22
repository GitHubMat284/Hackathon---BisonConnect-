import Link from 'next/link';

export default function AboutPage() {
    return (
      <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
       
          
       <div
      style={{
        backgroundImage: 'url("/SwingDancePhoto.jpeg")', // Path to your image
        backgroundSize: 'cover', // Cover the entire screen
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent the image from repeating
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        position: 'relative', // Positioning context for children
        display: 'flex', // Use flexbox for centering
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center', // Center items vertically
        textAlign: 'center', // Center text
       
      }}
    >
      {/* Back to Home Button */}
      <Link href="/">
        <button
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }} className=" mt-6 px-6 py-3 font-bold bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </Link>

      {/* Adjusted h1 and p Tags */}
      <h1 style={{ fontSize: '4rem', color: 'white', margin: '0' }}>About Page</h1>
      <p style={{ fontSize: '1.5rem', color: 'white', marginTop: '20px' }}>
      Welcome to BisonsConnect! This platform helps University of Manitoba students find events, connect with others, and explore campus life. We’re all about connecting you with the coolest events like epic dance parties, important networking sessions and even communal gatherings! Whether you’re into wild late-night parties or old fashioned dancing lessons, we’ve got the scoop on events that make college life unforgettable.
      Our number 1 policy is to leave your house, touch some grass and have a good time! So grab your friends and dive into a world of fun, learning, and community. From live music to art shows, there’s always something happening that’ll spark your interest and ignite your passions. Stay tuned and get ready to make some incredible memories—this is your hub for all things awesome at our university!
      </p>
    </div>
      
      </main>
    );
  }
  