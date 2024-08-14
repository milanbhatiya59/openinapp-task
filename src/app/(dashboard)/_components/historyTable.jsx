import React, { useState } from 'react';

export default function HistoryTable({ uploadedFiles, handleTagSelection }) {
    const [selectedTag, setSelectedTag] = useState({});

    const handleChange = (fileId, event) => {
        const newTag = event.target.value;
        setSelectedTag(prevState => ({
            ...prevState,
            [fileId]: newTag
        }));
        if (newTag) {
            handleTagSelection(fileId, newTag);
            setSelectedTag(prevState => ({
                ...prevState,
                [fileId]: ''
            }));
        }
    };

    const handleTagRemove = (fileId, tagToRemove) => {
        handleTagSelection(fileId, tagToRemove, 'remove');
    };

    return (
        <div className="w-full">
            <div className="w-full bg-slate-200 mt-10 my-6 px-6 py-4 rounded-md dark:bg-black dark:text-white">
                <div className="w-full overflow-x-auto">
                    <div className="min-w-[700px] flex mb-4">
                        <div className="w-[8%] text-center text-md my-auto">Sr. no</div>
                        <div className="p-2 text-center w-[25%] my-auto text-md">
                            Links
                        </div>
                        <div className="text-center w-[20%] my-auto text-md">
                            Prefixes
                        </div>
                        <div className="text-center w-[20%] my-auto text-md">
                            Add Tags
                        </div>
                        <div className="w-[25%] my-auto text-center text-md">
                            Selected Tag
                        </div>
                    </div>
                    {uploadedFiles.map((file, index) => (
                        <div key={file.id} className="min-w-[700px] flex mb-[16px] bg-white py-2 rounded-md dark:bg-light-dark">
                            <div className="w-[8%] text-center text-xl my-auto">{index + 1}</div>
                            <div className="p-2 text-center w-[25%] my-auto">
                                <a href={file.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400">
                                    {file.name}
                                </a>
                            </div>
                            <div className="text-center w-[20%] my-auto">
                                {file.prefix}
                            </div>
                            <div className="text-center w-[20%] my-auto">
                                <select
                                    value={selectedTag[file.id] || ''}
                                    onChange={(e) => handleChange(file.id, e)}
                                    className="p-[5px] px-[8px] rounded-lg text-center text-black dark:bg-black dark:text-white"
                                >
                                    <option value="" disabled>Select Tags</option>
                                    <option value="Tag 1">Tag 1</option>
                                    <option value="Tag 2">Tag 2</option>
                                    <option value="Tag 3">Tag 3</option>
                                    <option value="Tag 4">Tag 4</option>
                                    <option value="Tag 5">Tag 5</option>
                                </select>
                            </div>
                            <div className="w-[25%] my-auto">
                                {file.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="inline-block text-center p-[2px] px-2 bg-purple-500 bg-purple rounded-lg mr-1 text-white relative"
                                    >
                                        {tag}
                                        <button
                                            onClick={() => handleTagRemove(file.id, tag)}
                                            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-purple text-white rounded-full w-4 h-4 flex items-center justify-center text-sm"
                                        >
                                            &times;
                                        </button>
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
