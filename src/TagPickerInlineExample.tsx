// const { TagPicker, ITag, IBasePickerSuggestionsProps, mergeStyles, ThemeProvider, initializeIcons } = window.FluentUIReact;
// const { useId } = window.FluentUIReactHooks;
import * as React from 'react';
import { TagPicker, ITag, IBasePickerSuggestionsProps, mergeStyles, ThemeProvider, initializeIcons} from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';


// Initialize icons in case this example uses them
initializeIcons();



const pickerSuggestionsProps: IBasePickerSuggestionsProps = {
    // suggestionsHeaderText: 'Suggested colors',
    noResultsFoundText: 'No color tags found',
};

const testTags: ITag[] = [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow',
].map(item => ({ key: item, name: item[0].toUpperCase() + item.slice(1) }));

const listContainsTagList = (tag: ITag, tagList?: ITag[]) => {
    if (!tagList || !tagList.length || tagList.length === 0) {
        return false;
    }
    return tagList.some(compareTag => compareTag.key === tag.key);
};

const filterSuggestedTags = (filterText: string, tagList: ITag[]|undefined): ITag[] => {
    return filterText
        ? testTags.filter(
            tag => tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0 && !listContainsTagList(tag, tagList),
        )
        : [];
};

const getTextFromItem = (item: ITag) => item.name;

const TagPickerInlineExample: React.FunctionComponent = () => {
    const pickerId = useId('inline-picker');

    return (
        <div >
            <TagPicker

                removeButtonAriaLabel="Remove"
                selectionAriaLabel="Selected colors"
                onResolveSuggestions={filterSuggestedTags}
                getTextFromItem={getTextFromItem}
                pickerSuggestionsProps={pickerSuggestionsProps}
                itemLimit={1}
                // this option tells the picker's callout to render inline instead of in a new layer
                pickerCalloutProps={{ doNotLayer: true }}
                inputProps={{
                    id: pickerId,
                }}
            />

        </div>
    );
};

export default TagPickerInlineExample