import AddSetForm from "./add-set-form";
import SetList from "./set-list";

export function FeatureSets() {
  return (
    <div className="flex">
      <AddSetForm></AddSetForm>
      <SetList></SetList>
    </div>
  );
}

export default FeatureSets;
