import { lifeCategories } from "@/data/life";
import LifeCategoryClient from "./LifeCategoryClient";

export async function generateStaticParams() {
  return lifeCategories.map((category) => ({
    category: category.id,
  }));
}

export default function LifeCategoryPage() {
  return <LifeCategoryClient />;
}
