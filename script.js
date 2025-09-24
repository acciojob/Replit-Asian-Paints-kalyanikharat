const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");

    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Reset all blocks to transparent
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
      }

      // Apply new color to selected block
      const targetBlock = document.getElementById(blockId);
      if (targetBlock) {
        targetBlock.style.backgroundColor = color;
      }
    });

    resetButton.addEventListener("click", () => {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
      }
    });