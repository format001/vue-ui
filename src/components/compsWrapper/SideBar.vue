<template>
    <div class="side-bar">
        <tree-menu>
            <template
                v-for="item of menuData">
                <menu-item
                    v-if="!item.children"
                    :key="item.id"
                >
                    {{ item.title }}
                </menu-item>
                <re-sub-menu
                    :key="item.id"
                    :data="item"
                    v-else
                ></re-sub-menu>
            </template>
        </tree-menu>
    </div>
</template>

<script>

export default {
    name: "SideBar",
    setup () {

        return {
            menuData: [
                {
                id: 1,
                title: '菜单1'
            },
                {
                    id: 2,
                    title: '菜单2'
                },
                {
                    id: 3,
                    title: '菜单3',
                    children: [
                        {
                            id: 31,
                            title: '菜单3-1'
                        },
                        {
                            id: 32,
                            title: '菜单3-2',
                            children: [
                                {
                                    id: 321,
                                    title: '菜单3-2-1'
                                },
                                {
                                    id: 322,
                                    title: '菜单3-2-2',
                                    children: [
                                        {
                                            id: 3221,
                                            title: '菜单3-2-2-1'
                                        },
                                        {
                                            id: 3222,
                                            title: '菜单3-2-2-2',
                                        },
                                        {
                                            id: 3223,
                                            title: '菜单3-2-2-3',
                                            children: [
                                                {
                                                    id: 32231,
                                                    title: '菜单3-2-2-3-1'
                                                },
                                                {
                                                    id: 32232,
                                                    title: '菜单3-2-2-3-2',
                                                },
                                                {
                                                    id: 32233,
                                                    title: '菜单3-2-2-3-3'
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    id: 323,
                                    title: '菜单3-2-3'
                                },
                            ]
                        },
                        {
                            id: 33,
                            title: '菜单3-3'
                        },
                    ]
                },
                {
                    id: 5,
                    title: '菜单5'
                },
                {
                    id: 5,
                    title: '菜单5'
                }
                ]
        }
    }
}
</script>

<style scoped lang="scss">
.side-bar {
    width: 200px;
    font-size: 14px;
}
</style>