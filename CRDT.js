function applyEdits(initialDoc, edits) {
    // Sort edits by timestamp
    edits.sort((a, b) => a.timestamp - b.timestamp);
  
    // Convert to array for easy editing
    let docArray = initialDoc.split("");
  
    for (const edit of edits) {
      const { type, char, pos, timestamp } = edit;
  
      if (type === "insert") {
        if (pos >= 0 && pos <= docArray.length) {
          docArray.splice(pos, 0, char);
        }
      } else if (type === "delete") {
        if (pos >= 0 && pos < docArray.length) {
          docArray.splice(pos, 1);
        }
      }
    }
  
    return docArray.join("");
  }
  
  // Example
  const initialDoc = "hello";
  const edits = [
    { type: "insert", char: "!", pos: 5, timestamp: 100 },
    { type: "delete", pos: 0, timestamp: 101 },
    { type: "insert", char: "H", pos: 0, timestamp: 102 }
  ];
  
  console.log(applyEdits(initialDoc, edits)); // Output: "Hello!"
  
  // 