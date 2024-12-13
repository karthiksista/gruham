import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Our First Meetup Story in 2022",
      excerpt: "The one where it all started.",
      image: "../../public/f3.jpg",
    },
    {
      title: "Our Second Meetup Story in 2023",
      excerpt: "The one with brunch.",
      image: "../../public/chutneys.jpg",
    },
    {
      title: "Our Third Meetup Story in 2024",
      excerpt: "The one with the long drive.",
      image: "../../public/image3.jpg",
    },
  ];

  return (
    <section className="bg-beige-light py-10" id="blog">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-beige-dark text-center mb-10">
          Blog
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-beige-medium rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-t-lg h-48 w-full object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-bold text-beige-dark mb-2">
                  {post.title}
                </h4>
                <p className="text-beige-dark">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
