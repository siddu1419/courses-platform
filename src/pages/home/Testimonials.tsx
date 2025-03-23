import StarIcon from '../../assets/StarIcon';
import PageHeading from '../../components/PageHeading';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Nivrithi',
      review: 'Every class with Dileep sir is a mix of fun, learning, and deep understanding. He takes the time to ensure that each student gets the concept, often using creative methods to explain topics. His friendly and open nature makes it easy to ask questions and learn without hesitation.',
      rating: 5,
    },
    {
      name: 'Rahul',
      review: 'Dileep sir makes physics incredibly fun and interactive. He brings concepts to life with real-world examples and physical objects, making even the toughest topics easy to grasp. His friendly and talkative nature ensures that every class feels engaging and enjoyable.',
      rating: 5,
    },
    {
      name: 'Vidhya Charan',
      review: 'One of the best teachers I’ve ever had! Dileep sir makes physics feel easy with his interactive approach. He connects with students on a personal level, ensuring that everyone understands. His ability to simplify complex topics is truly remarkable.',
      rating: 5,
    },
    {
      name: 'Aakanksha',
      review: 'A teacher like Dileep sir is hard to find. He combines knowledge with enthusiasm, making physics both exciting and easy to understand. His interactive teaching style keeps students engaged, and his willingness to explain concepts repeatedly ensures that no one is left confused.',
      rating: 5,
    },
    {
      name: 'Yashwanth',
      review: 'Who needs a lab when you have Dileep sir? He used a simple door to explain torque, showing us how pushing from different points changes the force needed. Every class feels like a discovery, not just a lesson.',
      rating: 5,
    },
    {
      name: 'Samiksha',
      review: 'We never know what to expect in Dileep sir’s class! He once used a disc to explain moment of inertia and made it roll on the floor to show how mass distribution affects motion. Learning from him feels more like exploring than studying!',
      rating: 5,
    },
    {
      name: 'Nabiha',
      review: 'Instead of drawing diagrams on the board, Dileep sir just picks up random objects—water bottles, keys, books, anything nearby—and turns them into physics experiments. It makes us feel like we’re actually discovering the concepts instead of just listening to them.',
      rating: 5,
    },
    {
      name: 'Sameer',
      review: 'Dileep sir makes sure we don’t just understand physics but feel it! He used a fidget spinner to show angular momentum, and suddenly, we could all picture how gyroscopes work. His classes are like watching physics come alive!',
      rating: 5,
    },
    {
      name: 'Vamshi',
      review: 'The best part is that no one in class hesitates to speak up—everyone is expressive, asking doubts freely and discussing concepts without fear. Unlike other classes where students stay silent, here, we actually engage and learn together.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="testimonials mt-28 lg:mt-44">
      <PageHeading h1="Testimonials" h2="Student voices" />
      <p className="mx-auto max-w-3xl text-center font-light text-neutral lg:text-lg">
        Don’t just take our word for it. Hear from our students from all walks of
        life as they share the impact of our courses in their educational journey.
      </p>

      {/* Grid Container */}
      <div className="testimonial-cards-container mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((x, i) => (
          <TestimonialCard key={i} {...x} />
        ))}
      </div>
    </section>
  );
}

type T = {
  name: string;
  review: string;
  rating: number;
};

function TestimonialCard({ name, review, rating }: T) {
  return (
    <article className="testimonial-card relative flex flex-col gap-4 rounded-lg bg-white p-6">
      {/* Reviewer Name and Rating */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="text-yellow-400">
                <StarIcon />
              </span>
            ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="mt-2 text-sm font-light text-gray-600">{review}</p>
    </article>
  );
}