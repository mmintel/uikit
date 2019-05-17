export default function() {
  return {
    template: `
      <div style="
        height: calc(100vh - 16px);
        width: calc(100vw - 16px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      ">
      <story/>
      </div>
    `,
  }
}