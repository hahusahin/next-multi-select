import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/ui/multi-select";

function CustomizeBadgesMultiSelect() {
  return (
    <MultiSelect>
      {/* <MultiSelect onValuesChange={field.onChange} values={field.value}> */}
      <MultiSelectTrigger className="w-full max-w-[400px]">
        <MultiSelectValue placeholder="Select fruit..." clickToRemove={false} />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectGroup>
          <MultiSelectItem value="apple" badgeLabel="🍎">
            Apple
          </MultiSelectItem>
          <MultiSelectItem value="banana" badgeLabel="🍌">
            Banana
          </MultiSelectItem>
          <MultiSelectItem value="cherry" badgeLabel="🍒">
            Cherry
          </MultiSelectItem>
          <MultiSelectItem value="grape" badgeLabel="🍇">
            Grape
          </MultiSelectItem>
          <MultiSelectItem value="kiwi" badgeLabel="🥝">
            Kiwi
          </MultiSelectItem>
          <MultiSelectItem value="orange" badgeLabel="🍊">
            Orange
          </MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  );
}

export function SingleSelect() {
  return (
    <MultiSelect single={true} defaultValues={["next.js"]}>
      <MultiSelectTrigger className="w-full">
        <MultiSelectValue />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectGroup>
          <MultiSelectItem value="next.js">Next.js</MultiSelectItem>
          <MultiSelectItem value="sveltekit">SvelteKit</MultiSelectItem>
          <MultiSelectItem value="nuxt.js">Nuxt.js</MultiSelectItem>
          <MultiSelectItem value="remix">Remix</MultiSelectItem>
          <MultiSelectItem value="astro">Astro</MultiSelectItem>
          <MultiSelectItem value="vue">Vue.js</MultiSelectItem>
          <MultiSelectItem value="react">React</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  );
}

export function SearchConfigurationMultiSelect() {
  return (
    <MultiSelect>
      <MultiSelectTrigger className="w-full">
        <MultiSelectValue />
      </MultiSelectTrigger>
      <MultiSelectContent
        // search={{
        //   emptyMessage: "No frameworks found",
        //   placeholder: "Search frameworks...",
        // }}
        search={false}
      >
        <MultiSelectGroup>
          <MultiSelectItem value="next.js">Next.js</MultiSelectItem>
          <MultiSelectItem value="sveltekit">SvelteKit</MultiSelectItem>
          <MultiSelectItem value="nuxt.js">Nuxt.js</MultiSelectItem>
          <MultiSelectItem value="remix">Remix</MultiSelectItem>
          <MultiSelectItem value="astro">Astro</MultiSelectItem>
          <MultiSelectItem value="vue">Vue.js</MultiSelectItem>
          <MultiSelectItem value="react">React</MultiSelectItem>
        </MultiSelectGroup>
      </MultiSelectContent>
    </MultiSelect>
  );
}

const ExampleMultiSelect = () => {
  return (
    <div className="grid grid-cols-4">
      <CustomizeBadgesMultiSelect />
      <SingleSelect />
      <SearchConfigurationMultiSelect />
    </div>
  );
};

export default ExampleMultiSelect;
