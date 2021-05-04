/**
 * Fixes the "bug" where the title of screens with a back arrow
 * would have a large gap between the title and back arrow.
 * This is fixed by manually setting the left side offset of the
 * title container and must be set on ALL screens that has a back arrow.
 *
 * I.e.:
 * ```jsx
 * <Stack.Screen ... options={..., ...TitleOffsetOptions} />
 * ```
 */
export const TITLE_LEFT_OFFSET = 60

const TitleOffsetOptions = {
    headerTitleContainerStyle: {
        left: TITLE_LEFT_OFFSET,
    },
}

export default TitleOffsetOptions
