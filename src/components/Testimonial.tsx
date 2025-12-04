import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-12 md:py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="relative aspect-4/5 overflow-hidden bg-gray-200 image-hover-zoom">
            <Image
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop"
              alt="Fashion"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8 lg:pl-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
              STYLE IS
              <br />
              A WAY TO
              <br />
              SAY WHO
              <br />
              YOU ARE
            </h2>

            {/* Stats */}
            <div className="flex gap-12 pt-6">
              <div>
                <p className="text-4xl md:text-5xl font-black">12K+</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black">500+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
