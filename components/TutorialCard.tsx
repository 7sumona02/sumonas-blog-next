import Link from 'next/link';
import Image from 'next/image';

interface Tutorial {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    coverImage?: string;
  };
}

const TutorialCard = ({ tutorial }: { tutorial: Tutorial }) => {
  const { slug, frontmatter } = tutorial;
  const { title, description, coverImage } = frontmatter;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {coverImage && (
        <div className="aspect-w-16 aspect-h-9">
          <Image
            src={coverImage}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
        <Link href={`/tutorials/${slug}`}>
          <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TutorialCard;