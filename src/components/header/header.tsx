import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <nav id="header" class="fixed w-full z-30 top-0 text-white">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center text-white text-lg">RK</div>
        <div
          class="flex-grow flex lg:items-center w-auto mt-2 bg-transparent text-black p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset flex justify-end flex-1 items-center">
            <li class="mr-3">
              <a
                class="inline-block text-white no-underline hover:text-indigo-800 py-2 px-4"
                href="/"
              >
                Home
              </a>
            </li>
            <li class="mr-3">
              <a
                class="inline-block text-white no-underline hover:text-indigo-800 py-2 px-4"
                href="/research"
              >Research</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr class="border-b border-gray-100 opacity-25 my-0 py-0" /> */}
    </nav>
  );
});
