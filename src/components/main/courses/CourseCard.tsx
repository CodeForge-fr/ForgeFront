type Props = {
  title: string;
  price: number;
  image: string;
};

export default function CourseCard({ title, price, image }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={image} className="w-full h-40 object-cover" />

      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>

        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">${price}</span>

          <button className="bg-blue-600 text-white px-3 py-1 rounded-md">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}