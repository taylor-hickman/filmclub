import { redirect } from "next/navigation";

export default async function ListsPage() {
  redirect("/app/watchlists");
}
