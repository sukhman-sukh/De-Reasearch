// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


// TODO: Can change here to make it struct and eliminate the need of mysql to store info and metadata
struct Paper {
    string timestamp;
    address userId;
    string cid;
    string author;
    string title;
    string description;
    bool dayCompleted;
}


contract PublishPaper{
    // mapping of cid with user's account id
    mapping (string => address) paperToOwner;
    mapping ( string => uint) cidToPaperIndex; 
    Paper[] papers;
    uint paperIndex = 0;


    function onlyOwner(string calldata cid) view public {
        require(msg.sender == paperToOwner[cid]);
    }

    function publishPaper (
            string memory _timestamp ,
            address _userId,
            string memory _cid,
            string memory _author,
            string memory _title,
            string memory _description,
            bool _dayCompleted 
        ) public {
        paperToOwner[_cid] = _userId;
        Paper memory paper = Paper(_timestamp, _userId, _cid, _author, _title, _description, _dayCompleted); 
        papers.push(paper);
        cidToPaperIndex[_cid] = paperIndex;
        paperIndex++;
    }

    function deletePaper (string calldata cid) public{
        onlyOwner(cid);

        paperToOwner[cid] = address(0);
        Paper memory paper = papers[cidToPaperIndex[cid]];
        paper.timestamp = "";
        paper.userId = address(0);
        paper.cid = "";
        paper.author = "";
        paper.title = "";
        paper.description = "";
        paper.dayCompleted = false;
    }

    function getPaper(string calldata cid) public view returns (string memory,address, string memory, string memory, string memory, bool){
        return (papers[cidToPaperIndex[cid]].timestamp, papers[cidToPaperIndex[cid]].userId, papers[cidToPaperIndex[cid]].author, papers[cidToPaperIndex[cid]].title, papers[cidToPaperIndex[cid]].description, papers[cidToPaperIndex[cid]].dayCompleted);
    }

    function getPapers() public view returns (Paper[] memory) {
        return (papers);
    }
}