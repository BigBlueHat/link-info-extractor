let $links = $('#links');

chrome.tabs.executeScript(null, {
  file: 'extractor.js'
}, (results) => {
  let anchors = results[0];
  anchors.forEach((a) => {
    let tr = `<tr>
      <td><a href="${a.href}" target="_blank">${a.href}</a><br />
      ${a.text}
      </td>
      <td>${a.rel}</td>
    </tr>`;
    $links.append(tr);
  });
});
