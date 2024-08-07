/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  export function updateList(data){
    const playListBox = document.querySelector(".playlist-box");
    playListBox.innerHTML = data.map((item) => `<li class="p-2 border border-solid border-1 border-gray-300 rounded-lg">${item.title}</li>`).join('');
  }  
