type CourseCardProps = {
  name: string;
  cost: number;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  onEnrollClick: () => void;
  isComingSoon?: boolean;
};

export default function CourseCard({
  name,
  description,
  startDate,
  endDate,
  image,
  onEnrollClick,
  isComingSoon = false,
}: CourseCardProps) {
  // Check if the course is a live class (11th or 12th)
  const isLiveClass = name.includes('Live Online Classes');

  return (
    <article className="course-card smooth-box-shadow flex flex-col gap-6 rounded-lg border-neutral p-7">
      {/* Course Image */}
      <div className="card-img-container h-48 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Course Header */}
      <div className="course-card-header">
        <h3 className="mb-2 text-lg text-accent-content lg:text-xl">{name}</h3>
      </div>

      {/* Course Description */}
      <div className="course-card-body text-text-gray-400 font-light">
        {description}
      </div>

      {/* Course Dates */}
      <div className="course-dates text-sm font-light">
        <p>Starts: {startDate}</p>
        <p>Ends: {endDate}</p>
      </div>

      {/* Enroll Now Button */}
      <div className="course-card-footer mt-4 flex flex-col gap-2">
        {/* Show "1st Batch Filled Out" button for live classes */}
        {isLiveClass && (
          <button className="btn-filled-out w-full" disabled>
            1st Batch Sold Out
          </button>
        )}

        {/* Show "Enroll Now" or "Coming Soon" button */}
        {isComingSoon ? (
          <button className="btn-coming-soon w-full" disabled>
            Coming Soon
          </button>
        ) : (
          <button className="btn-neutral-custom w-full" onClick={onEnrollClick}>
            Enroll now
          </button>
        )}
      </div>
    </article>
  );
}