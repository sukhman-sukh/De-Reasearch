import React, { useState } from "react";
import { Dropzone } from "@mantine/dropzone";
import { Paper } from "../types";

const Upload = () => {
    const [title, setTitle] = useState<string>(""); // Specify the type as string
    const [author, setAuthor] = useState<string>(""); // Specify the type as string
    const [description, setDescription] = useState<string>(""); // Specify the type as string
    const [paper, setPaper] = useState<Paper | null>(null);

    const handleDrop = (files: File[]) => {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const paper: Paper = {
                cid: "", // You need to implement the generation of a unique CID
                timestamp: new Date().toISOString(), // Get the current timestamp
                author: "Your Author Name", // You can replace with actual author information
                title: title, // Use the title from the component's state
                description: description, // Use the description from the component's state
                address: "Your Address", // You can replace with actual address information
                isDayCompleted: false, // You can set the initial value as per your requirements
            };
            setPaper(paper);
        };
        reader.readAsDataURL(file);
    };
    

    const handleSubmit = () => {
        // Here you can submit the form data to your backend
        console.log({ title, description, paper });
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Upload Paper</h1>
            <div className="mb-4">
                <label htmlFor="title" className="block font-medium mb-2">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="author" className="block font-medium mb-2">
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block font-medium mb-2">
                    Description
                </label>
                <textarea
                    id="description"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="paper" className="block font-medium mb-2">
                    Paper
                </label>
                <Dropzone onDrop={handleDrop}>
                    {paper ? (
                        <div className="p-4 border border-gray-300 rounded-md">
                            <div className="mb-2">
                                <strong>Name:</strong> {paper.title}
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 border border-gray-300 rounded-md">
                            Drag and drop your paper here or click to select a file
                        </div>
                    )}
                </Dropzone>
            </div>
            <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default Upload;