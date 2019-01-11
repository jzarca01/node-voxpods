# node-voxpods

An API for the podcast app [Vox Pods](https://podcaster-api.herokuapp.com)

## Usage

```javascript
const VoxPods = require('node-voxpods');
const vox = new VoxPods();
```

### Search

```javascript
vox.search(searchTerm);
```

### Get episodes

```javascript
vox.getEpisodes(podcastId);
```

### Get list

```javascript
vox.getList(listId);
```
