import React, { useState } from "react";

interface EditedValues {
  [key: string]: string; // Adjust the type based on your use case
}

const Item = (props: any): JSX.Element => {
  const [color, setColor] = useState<string>("bg-white");
  const [editableField, setEditableField] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState<EditedValues>({});

  const manageColor = (bgColor: string) => {
    setColor((prevColor) => (bgColor === prevColor ? "bg-white" : bgColor));
  };

  const handleEditClick = (field: string) => {
    setEditableField(field);
    setEditedValues({ ...editedValues, [field]: props[field] });
  };

  const handleSaveClick = () => {
    const updatedProps = { ...props, ...editedValues };
    console.log("Updated props:", updatedProps);

    if (props.onSaveClick) {
      props.onSaveClick(updatedProps);
    }

    setEditableField(null);
    setEditedValues({});
  };

  const handleCancelClick = () => {
    setEditableField(null);
    setEditedValues({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleRemoveClick = () => {
    if (props.onRemoveClick) {
      props.onRemoveClick(props.id);
    }
  };

  const renderField = (field: string) => {
    const isEditing = editableField === field;
    if (props.editable) {
      if (isEditing) {
        return (
          <div className="flex items-center gap-2">
            <input
              type="text"
              name={field}
              value={editedValues[field] || ""}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-1"
            />
            <button
              onClick={handleSaveClick}
              className="bg-green-500 text-black py-1 px-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-gray-500 text-black py-1 px-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Cancel
            </button>
          </div>
        );
      } else {
        return (
          <span
            className="text-red-500 font-medium cursor-pointer"
            onClick={() => handleEditClick(field)}
          >
            {props[field]}
          </span>
        );
      }
    }
  };

  return (
    <div
      className={`flex flex-grow p-4 justify-between ${color} border rounded-lg shadow-md`}
    >
      <div className="w-4/5 flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl break-all text-purple-800">
            <a className="hover:underline" href={props.link}>
              {props.title}
            </a>
          </h1>
        </div>

        {props.author && (
          <h2 className="text-gray-700">
            <span className="font-semibold">Author(s):</span>{" "}
            {renderField("author")}
          </h2>
        )}

        {props.citedByNumber && props.citedByLink && (
          <h2 className="text-gray-700">
            <span className="font-semibold">
              Cited by: <a href={props.citedByLink}>{props.citedByNumber} </a>
            </span>
            {renderField("citedByNumber")}
            paper(s)
          </h2>
        )}
        {props.year && (
          <h2 className="text-gray-700">
            <span className="font-semibold">Year of publication: </span>
            {renderField("year")}
          </h2>
        )}
        {props.versionLink && props.versionNumber && (
          <h2 className="text-gray-700">
            <span className="font-semibold">Version(s): <a href={props.versionLink}>{props.versionNumber}</a></span>{" "}
            <a href={props.versionLink} className="text-blue-500">
              {renderField("versionNumber")}
            </a>
          </h2>
        )}
        {props.publication && (
          <h2 className="text-gray-700">
            <span className="font-semibold">Website: </span>{" "}
            {renderField("publication")}
          </h2>
        )}
        {props.areaOfResearch && (
          <h2 className="text-gray-700">
            <span className="font-semibold">Area of Research: </span>
            {renderField("areaOfResearch")}
          </h2>
        )}
      </div>
      <div className="w-1/5 flex justify-center gap-1">
        <button
          onClick={() => manageColor("bg-emerald-300")}
          className="rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <img
            style={{ width: "25px", height: "25px" }}
            src="green-button.png"
            alt="Green Button"
          />
        </button>
        <button
          onClick={() => manageColor("bg-amber-200")}
          className="rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <img
            style={{ width: "25px", height: "25px" }}
            src="yellow-button.png"
            alt="Yellow Button"
          />
        </button>
        <button
          onClick={() => manageColor("bg-red-300")}
          className="rounded-full p-2 focus:outline-none focus:ring focus:border-blue-300"
        >
          <img
            style={{ width: "25px", height: "25px" }}
            src="red-button.png"
            alt="Red Button"
          />
        </button>
      </div>
      {props.delete && (
        <button className="text-red-500" onClick={handleRemoveClick}>
          Delete Record
        </button>
      )}
    </div>
  );
};

export default Item;
