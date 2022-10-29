function CourseGrid(props) {
  return (
    <div class="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:px-4 xl:grid-cols-4">
      {props.Courses}
    </div>
  );
}
export default CourseGrid;
