export default function MyForm({ children, mygap }) {
  return (
    <fieldset className={`fieldset ${mygap ? mygap : "gap-6"}`}>
      {children}
    </fieldset>
  );
}
