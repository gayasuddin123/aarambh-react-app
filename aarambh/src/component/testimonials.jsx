import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Anshuman',
      comment: "Aarambh Community, where technology and talent converge, has ignited my passion for innovation and collaboration. It's a dynamic hub where I've honed my skills, forged lifelong connections, and witnessed the transformative power of technology in driving progress.",
      image: 's1.png', // image URL
    },
    {
      id: 2,
      name: 'Gaysuddin',
      comment: "Aarambh is not just a community; It's a hub of limitless opportunities, a place where the best of technology and our brightest minds converge to supercharge progress like never before.",
      image: 's1.png', // image URL
    },
    {
      id: 3,
      name: 'Anshika',
      comment: "Aarambh provided me with a space to connect with like-minded individuals and build valuable relationships. It's a supportive community that fosters growth and collaboration.",
      image: 's2.png', // image URL
    },
  ];

  return (
    <div className="bg-gray-100 container px-16 py-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-8 ">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              {/* I have added some margin and padding to the testimonial elements to create more space and balance */}
              <p className="text-lg mb-8 p-4">{testimonial.comment}</p>
              <div className="flex items-center m-4 p-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <p className="text-gray-700 font-semibold">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Testimonials;
