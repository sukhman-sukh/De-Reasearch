import React, { useState } from "react";
import { Button, Input, Table } from "@mantine/core";
import { Container } from "@mantine/core";
import { Paper } from "../types"

const papers = [
    { id: "QmRj1cWCqNeRiyTogdnuTDHymQrs42NcjirDotHRFQmHLu", title: "Paper 1", description: "Somesfndkvnfd" , author: "Author 1", },
    { id: 2, title: "Paper 2", description: "kjvfdvkf dkvf", author: "Author 2" },
    { id: 3, title: "Paper 3", description: "fdnvfjkdnvfkndvfnkdvnfkjdnvkfdnvk", author: "Author 3" },
];

export default function Browse() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredPapers = papers.filter((paper) =>
        paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paper.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container size="xl" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ width: "100%" }}>
                <div className="flex items-center space-x-4 mb-4">
                    <Input
                        placeholder="Search papers"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.currentTarget.value)}
                    />
                    <Button variant="outline">Upload Paper</Button>
                </div>
                <Table striped style={{ border: "1px solid #ccc" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ccc" }}>Title</th>
                            <th style={{ border: "1px solid #ccc" }}>Author</th>
                            <th style={{ border: "1px solid #ccc" }}>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPapers.map((paper) => (
                            <tr key={paper.id}>
                                <a href={`/paper/${paper.id}`}>
                                <td style={{ border: "1px solid #ccc" }}>{paper.title}</td>
                                </a>
                                <td style={{ border: "1px solid #ccc" }}>{paper.author}</td>
                                <td style={{ border: "1px solid #ccc" }}>{paper.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
}
