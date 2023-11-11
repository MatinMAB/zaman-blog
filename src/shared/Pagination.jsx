export default function Pagination({links , handlePage}) {
 return (
  <ul className="flex items-center justify-center gap-1 text-sm my-8 ">
   {links?.map((link) => (
    <li key={link.label}>
     <button
      onClick={() => handlePage(link.url)}
      className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-white ${
       link.active ? "bg-gray-800" : "bg-orange-500"
      } border border-gray-800 rounded-full disabled`}
     >
      <div dangerouslySetInnerHTML={{ __html: link.label }}></div>
     </button>
    </li>
   ))}
  </ul>
 );
}
