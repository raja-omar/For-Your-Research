// src/pages/CrudComponent.tsx

import { useState } from "react";
import PaperForm from "../components/PaperForm";
import Item from "../components/Item";
import ManualPaper from "../util/ManualPaper";

export default function CrudComponent(): JSX.Element {
  const [papers, setPapers] = useState<ManualPaper[]>([]);

  const handleFormSubmit = (newPaper: any) => {
    const formattedPaper: ManualPaper = {
      id: new Date().getTime(),
      title: newPaper.name,
      link: "",
      ...newPaper,
    };

    setPapers((prevPapers) => [...prevPapers, formattedPaper]);
  };

  const handleSaveClickInItem = (updatedPaper: ManualPaper) => {
    setPapers((prevPapers) =>
      prevPapers.map((paper) =>
        paper.id === updatedPaper.id ? updatedPaper : paper
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    const updatedPapers = papers.filter((paper) => paper.id !== itemId);
    setPapers(updatedPapers);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-shrink-0 w-1/3 p-4">
        <PaperForm onSubmit={handleFormSubmit} />
      </div>
      <div className="flex-grow p-4 overflow-y-auto max-h-screen">
        <div className="divide-y border rounded-lg">
          {papers.map((paper) => (
            <Item
              key={paper.id}
              {...paper}
              onSaveClick={handleSaveClickInItem}
              onRemoveClick={handleRemoveItem}
              editable={true}
              delete={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
