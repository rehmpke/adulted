// Replace all occurences of "--" (double hyphens) with "—" (long-em dash)
$(document).ready(function() {
  function walkText(node) {
    if (node.nodeType == 3) {
      node.data = node.data.replace(/--/g, '—');
    }
    if (node.nodeType == 1 && node.nodeName != 'SCRIPT') {
      for (var i = 0; i < node.childNodes.length; i++) {
        walkText(node.childNodes[i]);
      }
    }
  }
  walkText(document.body);
});
