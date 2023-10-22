import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@mantine/core";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export default function PaperPage() {
    const router = useRouter();
    const { cid } = router.query;

    const [votes, setVotes] = useState<number>(0);

    const handleUpvote = () => {
        setVotes((prevVotes) => prevVotes + 1);
    };

    const handleDownvote = () => {
        setVotes((prevVotes) => prevVotes - 1);
    };

    return (
        <div className="flex flex-row items-center justify-center min-h-screen py-2">
            <main className="flex flex-row items-center justify-center w-full flex-1 px-20 text-center">
                {false ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div className="flex-col items-center justify-center mt-5 space-x-4">
                            <Button
                                color="gray"
                                onClick={handleUpvote}
                                style={{ fontSize: "24px", padding: "8px", borderRadius: "50%" }}
                            >
                                <ChevronUpIcon />
                            </Button>
                            <p className="text-3xl font-bold">{votes}</p>
                            <Button
                                color="gray"
                                onClick={handleDownvote}
                                style={{ fontSize: "24px", padding: "8px", borderRadius: "50%" }}
                            >
                                <ChevronDownIcon />
                            </Button>
                        </div>
                        <iframe
                            src={`https://gateway.lighthouse.storage/ipfs/${cid}`}
                            className="w-3/5 h-screen mt-5"
                        />
                    </>
                )}
            </main>
        </div>
    );
}
