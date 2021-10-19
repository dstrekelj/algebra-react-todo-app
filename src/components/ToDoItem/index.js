export default function ToDoItem({
  onToggle, onDelete, isDone, children
}) {
  const toggleLabel = isDone ? "Mark as todo" : "Mark as done";

  return (
    <div>
      <button type="button" onClick={onToggle}>
        {toggleLabel}
      </button>
      {children}
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}