export default async function ProjectDetailsPage({ params }) {
  const { id } = params;
  return(
    <div>
      <h1>Project Details for Project ID: {id}</h1>
    </div>
  )

}