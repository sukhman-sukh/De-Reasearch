import React, { useState } from "react";
import { Button, Input, Table } from "@mantine/core";
import { Container } from "@mantine/core";
import { Paper } from "../types";
import Header from "@/components/Header";

const papers = [
  {
    id: "QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj",
    title: "The BlockChain Paper",
    description: "blockchain paper",
    author: "Lakshya",
  },
  {
    id: "Qmd63gzHfXCsJepsdTLd4cqigFa7SuCAeH6smsVoHovdbE",
    title: "The Ethereum  WhitePaper",
    description:
      "The Ethereum whitepaper, authored by Vitalik Buterin in 2013, introduced a decentralized platform for smart contracts and decentralized applications (DApps), expanding the possibilities of blockchain technology.",
    author: "Vitalik Buterin",
  },
  {
    id: "QmeafVDQuNgWm4VQBCmdTkY6QXyhLeBXLpY2VivwGcviVD",
    title: "Filecoin: A Decentralized Storage Network",
    description:
      "The Filecoin whitepaper, authored by Juan Benet in 2017, presents a decentralized storage network, enabling users to rent and earn cryptocurrency for sharing their computer's storage space.",
    author: "Protocol Labs and Juan Benet",
  },
];

export default function Browse() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPapers = papers.filter(
    (paper) =>
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container
        size="xl"
        className="h-screen flex flex-col items-center justify-center text-white"
      >
        <div style={{ width: "100%" }}>
          <div className="flex flex-row items-center mb-4 justify-center align-center">
            <Input
              placeholder="Search papers"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.currentTarget.value)}
              style={{
                borderRadius: "10px",
                padding: "12px",
                width: "300px",
                height: "50px",
              }}
            />
            <Button
              component="a"
              href="/upload"
              variant="outline"
              color="white"
              className="bg-white text-black p-4 ml-4"
              style={{ borderRadius: "10px" }}
            >
              Upload Paper
            </Button>
          </div>
          <div className="flex flex-row items-center mb-4 justify-center align-center mt-8">
            <Table
              striped
              style={{
                border: "1px solid white",
              }}
              className="w-8/12 text-white rounded-lg shadow-md"
            >
              <thead style={{ background: "#2f418a" }}>
                <tr>
                  <th className="py-2">Title</th>
                  <th className="py-2">Author</th>
                  <th className="py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredPapers.map((paper) => (
                  <tr key={paper.id}>
                    <td className="text-center border-white">{paper.title}</td>
                    <td className="text-center border-white">{paper.author}</td>
                    <td className="text-center border-white">{paper.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </>
  );
}
