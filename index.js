function getName(node){
    return node.name
}

function headNode(node, collection){
    return collection[node]
}

function next (node, collection){
    let nextAddress = node.next
    return collection[`${nextAddress}`]
}

function nodeAt(index, node, collection){
    let currentNode = headNode(node, collection);
    for(let i = 0; i < index; i++){
       currentNode = next(currentNode, collection);
    }
  
    return currentNode;
}

function addressAt(index, node, collection){
    if (index == 0){
        return node
    }
    else{
    let current = nodeAt(index-1, node, collection)
    
    return current.next
    }
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection);
    let currentIdx = 0
    while(currentNode != node){
      currentIdx++
      currentNode = next(currentNode, collection)
    }
    return currentIdx
  }


  function insertNodeAt(index, newNodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
  }
  
  
  function deleteNodeAt(index, linkedList, collection){
    let previousNode;
    let currentNode = headNode(linkedList, collection);
    for(let i = 0; i < index; i++){
       previousNode = currentNode
       currentNode = next(currentNode, collection);
    }
    previousNode.next = currentNode.next
  }