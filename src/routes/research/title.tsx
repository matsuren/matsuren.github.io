import { component$ } from '@builder.io/qwik';

interface TitleProps {
  title?: string;
  id?: string
}

// BUG
export const Item = component$<TitleProps>((props) => {
  return (
    <>
      <h2 id="{props.id}" class="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">{props.title}</h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-74 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
    </>
  );
});