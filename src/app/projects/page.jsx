import Link from "next/link";

export default function ProjectsPage() {
  return <div>
    <h1>Projects</h1>
    <Link href="/projects/1">Project 1</Link>
    <Link href="/projects/2">Project 2</Link>
    <Link href="/projects/3">Project 3</Link>
    <Link href="/projects/4">Project 4</Link>
    <Link href="/projects/5">Project 5</Link>
  </div>;   
}